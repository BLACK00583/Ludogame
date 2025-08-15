// Very small demo: single token moves on 16-step square path
const rollBtn = document.getElementById('roll');
const diceEl = document.getElementById('dice');
const status = document.getElementById('status');
const token = document.getElementById('token');

const path = [];
const size = 300;
const cell = size/4;
for(let r=0;r<4;r++){
  path.push({x:r*cell,y:0});
}
for(let r=0;r<4;r++){
  path.push({x:size-cell,y:r*cell});
}
for(let r=3;r>=0;r--){
  path.push({x:r*cell,y:size-cell});
}
for(let r=3;r>=0;r--){
  path.push({x:0,y:r*cell});
}

let pos = 0;
function updateToken(){
  const p = path[pos % path.length];
  token.style.left = (p.x + (cell - 30)/2) + 'px';
  token.style.top = (p.y + (cell - 30)/2) + 'px';
}

rollBtn.addEventListener('click', ()=>{
  const roll = Math.floor(Math.random()*6)+1;
  diceEl.textContent = roll;
  status.textContent = 'Moving ' + roll + ' steps...';
  let steps = roll;
  const iv = setInterval(()=>{
    pos++;
    updateToken();
    steps--;
    if(steps<=0){ clearInterval(iv); status.textContent = 'Your turn ended.'; }
  }, 200);
});

// init
updateToken();
