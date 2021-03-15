module.exports  = function valitime (req, res, next) {
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    if (day != 6 && day != 0 && hours > 8 && hours < 17) {
        res.status(200);
        next();
    } else {
        next(res.send("<center><h1> This page available from Monday to Friday</h1></center> <br> <center><h1> from 9:00 a.m. to 5:00 p.m</h1></center>"));
    }
};
