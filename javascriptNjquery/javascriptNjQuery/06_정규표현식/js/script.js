const $idArea  = document.getElementById("idArea");
const $idMes   = document.getElementById("idMes");

const $pwArea  = document.getElementById("pwArea");
const $pwMes   = document.getElementById("pwMes");

const $pwArea2 = document.getElementById("pwArea2");
const $pwMes2  = document.getElementById("pwMes2");

const $name    = document.getElementById("name");
const $nameMes = document.getElementById("nameMes");

const $phone   = document.getElementById("phone");
const $phMes   = document.getElementById("phMes");

const $email   = document.getElementById("email");
const $eMes    = document.getElementById("eMes");

const $born    = document.getElementById("born");
const $bMes    = document.getElementById("bMes");

const $female  = document.getElementById("female");
const $male    = document.getElementById("male");
const $gMes    = document.getElementById("gMes");

const $submit  = document.getElementById("submit");

let regid    = /^[a-zA-Z0-9]{4,}$/;
let regpw    = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[!@#$%^&*+]).*$/;
let regname  = /^[ㄱ-ㅎ가-힣a-zA-Z]{2,30}$/;
let regphone = /(^01[016789]{1})([\d]{3,4})[0-9]{4}/;
let regemail = /^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z]([-_.]?[a-zA-Z0-9]*\.[a-zA-Z]{2,3}$)/g; // ? => 최대 1번 or 옵셔널
let regborn  = /[0-9]{8}$/g;

$idArea.addEventListener('blur', function() {
    if( !regid.test($idArea.value) ) {
        $idMes.innerHTML="아이디는 영문대소문자, 숫자포함 4글자 이상 가능";
        $idMes.style.color = '#e50f0f';
    } else {
        $idMes.innerHTML="사용가능한 아이디입니다.";
        $idMes.style.color = 'green';
    }
});

$pwArea.addEventListener('blur', function() {

    if( !regpw.test($pwArea.value) ) {
        $pwMes.innerHTML   = "비밀번호는 특수문자, 문자, 숫자 포함 8자이상 16자 미만의 값만 사용가능";
        $pwMes.style.color = '#e50f0f';
        $pwArea.focus();

        if( $pwArea.value == '' ) {
            $pwMes.innerHTML   ='비밀번호를 입력하세요';
            $pwMes.style.color = '#e50f0f';
            $pwArea.focus();
        }
    } else {
        $pwMes.innerHTML="사용가능한 패스워드입니다.";
        $pwMes.style.color = 'green';
    }
});

$pwArea2.addEventListener('blur', function() {

    if( ($pwArea.value === $pwArea2.value) && (!$pwArea2.value == '') ) {
        $pwMes2.innerHTML='비밀번호가 일치합니다.';
        $pwMes2.style.color = 'green';
    } else {

        if( ($pwArea.value == '') || ($pwArea2.value == '') ) {
            $pwArea.focus();
            $pwArea2.value = '';
        } else {
            $pwMes2.innerHTML='비밀번호가 일치하지 않습니다.';
            $pwMes2.style.color = '#e50f0f';
            $pwArea2.value = '';
            $pwArea2.focus();
        }        
    }

});

$name.addEventListener('blur', function(){
    console.log('regname test : ' + regname.test($name.value));
    if( regname.test($name.value) ) {
        $nameMes.innerHTML='';
    } else {
        $nameMes.innerHTML='이름을 정확하게 입력해주세요';
        $nameMes.style.color = '#e50f0f';
        $name.value = '';
        $name.focus();
    }
});

$phone.addEventListener('blur', function() {

    if( regphone.test($phone.value) ) {
        $phMes.innerHTML='';
    } else {
        $phMes.innerHTML='전화번호 정확하게 입력해주세요';
        $phMes.style.color = '#e50f0f';
        $phone.value = '';
        $phone.focus();
    }

});

$email.addEventListener('blur', function() {

    if( regemail.test($email.value) ) {
        $eMes.innerHTML='사용가능한 email 입니다.';
        $eMes.style.color = 'green';
    } else {
        $eMes.innerHTML='email 주소를 정확하게 입력해주세요';
        $eMes.style.color = '#e50f0f';
        $email.value = '';
        $email.focus();
    }

});

$born.addEventListener('blur', function() {

    if( regborn.test($born.value) ) {
        $bMes.innerHTML='';
    } else {
        $bMes.innerHTML='생년월일를 정확하게 입력해주세요';
        $bMes.style.color = '#e50f0f';
        $born.value = '';
        $born.focus();
    }

});

$submit.addEventListener('click', function() {
    if( $idArea.value == '' ) {
        alert('아이디를 입력해 주세요');
        return $idArea.focus();
    } else {
        if( !regid.test($idArea.value) ) {
            alert('아이디는 대소문, 숫자포함 4글자이상만 가능');
            $idArea.value = '';
            return false;
        } else {
            if ( $pwArea.value == '' ) {
                alert('비밀번호를 입력해 주세요');
                return $pwArea.focus();
            } else {
                if( $pwArea.value != $pwArea2.value ) {
                    alert('비밀번호가 일치 하지 않습니다.');
                    return false;
                } else {
                    if( $name.value == '' ) {
                        alert('이름을 입력해 주세요');
                        return false;
                    } else {
                        if( $phone.value == '' ) {
                            alert('핸드폰 번호를 입력해 주세요');
                            return false;
                        } else {
                            if( $email.value == '' ) {
                                alert('email 주소를 입력해 주세요');
                                return false;
                            } else {
                                if( $born.value == '' ) {
                                    alert('생년월일를 입력해 주세요');
                                    return false;
                                } else {
                                    if( document.querySelector('[name=gender]:checked') === null ) {
                                        $gMes.style.color = 'red';
                                        $gMes.innerHTML = '성별을 체크해 주세요';
                                        document.getElementById('female').focus()
                                    } else {
                                        location='login.html'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

});

