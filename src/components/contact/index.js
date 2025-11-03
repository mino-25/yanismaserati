import './index.css'
import Swal from 'sweetalert2'



function ContactForm(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e12ce762-96c5-49bd-af36-bdad9817a00b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Message Envoyé!",
                text: "Nous vous recontacterons vite !",
                icon: "success"
              });
        }
      };
    return(

        <section className="contact_form" id='contact'>

            <form onSubmit={onSubmit}>
                <h2>Réservation</h2>

                <div className="input-box">
                    <label>Date :</label>
                    <input type="date" name='Nom' className="field" placeholder="Date de l'évènement" required/>
                </div>

                <div className="input-box">
                    <label>Lieu :</label>
                    <input type="text" name='Numéro' className="field" placeholder='Ville en Île de France' required/>
                </div>

                <div className="input-box">
                    <label>Mail :</label>
                    <input type="texte" name='Lieu' className="field" placeholder='Pour vous recontactez' required/>
                </div>

                <div className="input-box">
                    <label>Plus de detail :</label>
                    <textarea name="message" className='field mess' placeholder="Type d'évènement, durée"></textarea>
                </div>

                <button type="submit">Envoyez</button>
            
            </form>
        </section>
    )
}

export default ContactForm;