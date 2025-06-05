const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

// jwt get
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

// middle wares :

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

// firebase
var admin = require("firebase-admin");

var serviceAccount = require("./adminKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
  // verify

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });

  console.log("Cookie in the middleware : ", token);
};

const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers?.authorization;
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  console.log("Fb token :", token);

  const userInfo = await admin.auth().verifyIdToken(token);
  req.tokenEmail = userInfo.email;
  next();
};
// mongo

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eui8ux4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    // collection
    const jobsCollection = client.db("careerJobs").collection("jobs");
    const applicationCollection = client
      .db("careerJobs")
      .collection("applications");

    // jwt token related apis

    app.post("/jwt", async (req, res) => {
      const userData = req.body;
      const token = jwt.sign(userData, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "1h",
      });

      // set token in the cookies
      res.cookie("token", token, {
        secure: false,
        httpOnly: true,
      });

      res.send({ success: true });
    });

    // jobs api
    app.get("/jobs", async (req, res) => {
      // conditional query building
      const email = req.query.email;
      const query = {};
      if (email) {
        query.hr_email = email;
      }

      const result = await jobsCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);

      res.send(result);
    });

    // adding a new job
    app.post("/jobs", async (req, res) => {
      const newJob = req.body;
      const result = await jobsCollection.insertOne(newJob);
      res.send(result);
    });

    // job application related apis

    app.get(
      "/applications",
      verifyToken,
      verifyFirebaseToken,
      async (req, res) => {
        const email = req.query.email;

        // check the email from decoded
        if (email !== req.decoded.email) {
          return res.status(401).send({ message: "Forbidden access" });
        }
        if (email !== req.tokenEmail) {
          return res.status(403).send({ message: "forbidden access" });
        }

        const query = {
          applicant: email,
        };
        const result = await applicationCollection.find(query).toArray();

        for (const application of result) {
          const jobId = application.jobId;
          const jobQuery = { _id: new ObjectId(jobId) };
          const job = await jobsCollection.findOne(jobQuery);
          application.title = job.title;
          application.company = job.company;
          application.company_logo = job.company_logo;
        }
        res.send(result);
      }
    );

    // update application :
    app.patch("/applications/:id", async (req, res) => {
      const id = req.body.id;
      const filter = {
        _id: new ObjectId(id),
      };
      const updatedDoc = {
        $set: {
          status: req.body.status,
        },
      };
      const result = await applicationCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.post("/applications", async (req, res) => {
      const application = req.body;
      const result = await applicationCollection.insertOne(application);

      res.send(result);
    });

    app.get("/applications/job/:job_id", async (req, res) => {
      const job_id = req.params.job_id;
      const query = {
        jobId: job_id,
      };

      const result = await applicationCollection.find(query).toArray();

      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Career code izzzz cooking...");
});

app.listen(port, () => {
  console.log(`Career code is running at port : ${port}`);
});
