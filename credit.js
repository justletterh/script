var ansi=require("ansi");
var c=ansi(process.stdout);

const log=(s)=>{process.stdout.write(s);};
const auth="h";

function main(){
  c.bold();
  var count=0;
  var l=[
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#00ff00",
    "#ffffff",
    "#0000ff",
    "#4B0082",
    "#FF68C4",
    "#ffffff"
  ];
  "Made By: ".split("").forEach((i)=>{
    c.hex(l[count]);
    log(i);
    count+=1;
  });
  c.underline();
  c.hex("#00ffff");
  log(auth+"\n");
  c.reset();
}

main();