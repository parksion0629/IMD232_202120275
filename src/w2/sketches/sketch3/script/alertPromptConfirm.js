alert('안녕하세요 External Script를 시작할게요');
let uesrName;
uesrName = prompt('당신의 이름은 ?', '홍길동');
let confirmVal = confirm('당신의 이름이 ' + uesrName + '이/가 맞습니까?');
if (confirmVal == true) {
  alert('환영합니다 ' + uesrName + '님.');
}
