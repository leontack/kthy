function buyLogo(file){
  alert('Оплата успішна ✅ Завантаження...');
  window.location.href = 'http://localhost:3000/api/download/' + file;
}

function withdrawMoney(){
  document.getElementById('withdraw-form').style.display='block';
}

function submitWithdraw(){
  const method=document.getElementById('method').value;
  const account=document.getElementById('account').value;
  if(!account){alert('Введіть реквізити!');return;}
  alert('Запит на вивід відправлено ✅');
  fetch('http://localhost:3000/api/withdraw',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({userId:'user123',method,account,amount:25})
  });
}
