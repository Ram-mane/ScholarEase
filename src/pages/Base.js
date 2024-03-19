import CustomSidebar from "../components/CustomSidebar";

const Base =({title = " welcome to our website ", children }) =>{

    return(
        <div className="container-fluid p-0 m-0">
            <CustomSidebar/>
            {children}
            
        </div>
    );
};

export default Base;