var katzDeliLine=[];
var number=1
function GiveMeANumber(katzDeliLine){
  //katzDeliLine.
  //line_positionkatzDeliLine[-1]
  katzDeliLine.push(number);
  number=number+1
  return (`You are number ${number} in line.`);
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return ("There is nobody waiting to be served!")
  }else{
  var first_person=katzDeliLine.shift();
  return (`Currently serving ${first_person}.`);
  }
}
function currentLine(katzDeliLine){
  var line_length=katzDeliLine.length;
  if (line_length===0){
    return("The line is currently empty.");
  }else{
    var new_katzDeliLine="";
    for (var i=1;i<line_length;i++){
      new_katzDeliLine+=(`${i}. ${katzDeliLine[i-1]}, `);
    }
    new_katzDeliLine=new_katzDeliLine+(`${line_length}. ${katzDeliLine[i-1]}`);
    return (`The line is currently: ${new_katzDeliLine}`);
  }
}