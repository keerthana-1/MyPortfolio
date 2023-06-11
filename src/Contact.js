import React from "react";

function Contact(){
    return (
        <div>
        
        <div className="contactform">
        <h4>Contact</h4>
             <form name="contact" netlify method="POST" onSubmit="submit">

                <input type="hidden" name="contact" value="contact"></input>

                <table className="table1">
                    <tr>
                        <td><label>Name:</label></td>
                    <td><input type="text" name="name"></input></td>

                    </tr>
                    <tr >
                        <td><label>Email:</label></td>
                    <td> <input type="email" name="email"></input></td>
                   
                    </tr>
                    <tr>
                        <td><label>Comments:</label></td>
                    <td><textarea name="comments" placeholder="leave your message here..."></textarea></td>
                    
                    </tr>
                </table>
            
                <br></br>
                <button type="submit">Send</button>
                <br></br>
             </form>

        </div>
        </div>
       
        
    )
}

export default Contact;
