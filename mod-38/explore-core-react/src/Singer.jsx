export default function Singer({name, age}){
    return(
        <div style={{
            margin:"10px",
            padding: "5px",
            border: "3px orange dotted",
            borderRadius:"20px"
        }}>
            <h3>Name : {name}</h3>
            <p>Age : {age} </p>
        </div>
    )
}