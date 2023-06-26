const form = document.getElementById('form')

form.addEventListener('submit' ,function(event) {  
    event.preventDefault();
    const yourName = document.getElementById('Full_Name').value
    const yourIDPassport = document.getElementById('ID/Passport_Number').value
    const yourLocation=document.getElementById('County').value
    const yourEmail=document.getElementById('Email_adress').value

    console.log(yourName)
    console.log(yourID/Passport)
    console.log(location)
    console.log(Email) 
    })
    form.addEventListener('submit' ,function(event) {  
        event.preventDefault();
    const Devicemodel = document.getElementById('Device_Model').value
    const brand = document.getElementById('Device_Brand').value
    const IMEI=document.getElementById('IMEI_Number').value

    console.log(model)
    console.log(brand)
    console.log(IMEI) 
    })

