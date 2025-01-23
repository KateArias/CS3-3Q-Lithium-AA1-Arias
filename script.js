const Pi = 3.14;
var r = 6.378e6;
var C = (2*Pi*r);
var SA = (4*Pi*r**2);
var V = (4/3*Pi*r**3);

document.write('The radius of the sphere is ' + r );
document.write('<br>');
document.write('The circumference is ' + C );
document.write('<br>');
document.write('The surface area is ' + SA );
document.write('<br>');
document.write('The volume is ' + V );
