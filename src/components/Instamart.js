import {useState} from "react";

const Section = ({title, des, isVisible, setIsVisible}) =>
{

    // const[isVisible, setIsVisible] = useState(false);

    return(
        <div className="border border-black p-2 m-2">
            <h2 className="font-bold text-xl">{title}</h2>
            {isVisible ?(            
                <button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>Hide</button>
            ) : (            
                <button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>Show</button>
            ) 
            }
            {isVisible && <p>{des}</p>}

        </div>
    )
}



const Instamart = () =>{

    const [visibleSection, setVisibleSection] = useState("about")
    return(
        <>
            <h1 className="p-2 m-2 text-3xl font-bold">Insta Mart</h1>
        <Section title={"About Us"} 
            des={
                "This is the about of the section Followed by some lorem epsum : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non soluta porro omnis, ut quaerat ex, distinctio quibusdam doloremque ullam est beatae iusto recusandae qui ad quisquam quos fuga deleniti facilis."} 
        
            isVisible = {visibleSection === "about"}
            setIsVisible={() => setVisibleSection("about")}
        />
        <Section title={"Team"}
            des={
                "This is the team of the section Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non soluta porro omnis, ut quaerat ex, distinctio quibusdam doloremque ullam est beatae iusto recusandae qui ad quisquam quos fuga deleniti facilis."} 
            
            isVisible = {visibleSection === "team"}
            setIsVisible={() => setVisibleSection("team")}
        />
        <Section title={"Career"} 
            des={
                "This is the career Section Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non soluta porro omnis, ut quaerat ex, distinctio quibusdam doloremque ullam est beatae iusto recusandae qui ad quisquam quos fuga deleniti facilis."} 
            
            isVisible = {visibleSection === "career"}
            setIsVisible={() => setVisibleSection("career")}
        />

        </>
    )


}

export default Instamart

