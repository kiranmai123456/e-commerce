const nodemailer=require("nodemailer");
const transporter=nodemailer.createTransporter({
    service:"gmail",
    auth:{user:"mkiranmai26@gmail.com",
    pass : "hndcvqlhyqyofjxe"}
});

const mail={
    from:"mkiranmai26@gmail.com",
    to:"kiranmaimachavarapu@gmail.com",
    subject:"Nodemailer",
    text:"hii this is mail from a e-commerce website"
}

transporter.sendMail(mail,(info,err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(info.response)
})