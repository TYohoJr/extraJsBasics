var bar = true;

function toggle(){
  if (bar){
    console.log('yes');
    bar = false;
  } else {
    console.log('no')
    bar = true;
  }
}

toggle();
toggle();
toggle();
toggle();

//Currently, the 4 toggle calls log "yes" "yes" "yes "yes." Edit the function toggle so that \
//the 4 calls log this: "yes" "no" "yes" "no".


