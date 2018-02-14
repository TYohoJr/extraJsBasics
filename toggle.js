var bar = true;

function toggle(){
  if (bar){
    console.log('yes');
  } else {
    console.log('no')
  }
}

toggle();
toggle();
toggle();
toggle();

//Currently, the 4 toggle calls log "yes" "yes" "yes "yes." Edit the function toggle so that \
//the 4 calls log this: "yes" "no" "yes" "no".


