import Subscription from "./Subscription";
import Functions from "./Functions";
import Section from "./Section";
import Table from "./Table";
import { useSelector } from "react-redux";


const Main = () => {

    const id = useSelector(state=>state.iD)


    return(
        <>
        <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Track your orders easier</h1>
                <p>Diam ipsum sadipscing amet at invidunt dolores rebum accusam sea et, labore sit et kasd sea, takimata et sadipscing sanctus.Ipsum sanctus ipsum nonumy ea eirmod. Labore vero elitr vero.</p>
                <a href="features.html" class="btn btn-outline">Read More</a>
            </div>

            <div class="showcase-form card">
                <h2>Create an Order</h2>
                 <form>
                    <div class="form-control">
                        <input type="text" name="name" placeholder="Name" required></input>
                    </div>
                    <div class="form-control">
                        <input type="text" name="company" placeholder="Company Name" required></input>
                    </div>
                    <div class="form-control">
                        <input type="email" name="email" placeholder="Email" required></input>
                    </div>
                    <input type="submit" value="Create" class="btn btn-primary"></input>
                </form>
            </div>
        </div>
    </section>
    <Section/>
    <Table/>    
    <Subscription/>
    <Functions/>
    </>
    )
} 
export default Main;