import React, { useEffect } from 'react';

function NaverLogin() {

  const { naver } = window;
	const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
	const NAVER_CALLBACK_URL = process.env.REACT_APP_NAVER_CALLBACK_URL;

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,
			isPopup: false,
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
		})

		naverLogin.init();
    naverLogin.getLoginStatus(async function (status) {
			if (status) {
				const userid = naverLogin.user.getEmail();
				const username = naverLogin.user.getName();
        const userage = naverLogin.user.getAge();

        if(userid === null || userid === undefined) {
          alert("이메일이 필요합니다. 정보제공을 동의해주세요.");
          naverLogin.reprompt();
          return ;  
        } else if (username === null || username === undefined) {
          alert("별명이 필요합니다. 정보제공을 동의해주세요.");
          naverLogin.reprompt();
          return;
        } else {
        }
			}
		});
  }

  // const userAccessToken = () => {
  //   window.location.href.includes('access_token') && getToken()
	// }
        
  // const getToken = () => {
	// 	const token = window.location.href.split('=')[1].split('&')[0]
	// }

	useEffect(() => {
		initializeNaverLogin();
		// userAccessToken();
	}, [])

	return (
		<>
			<div id="naverIdLogin" />
		</>
	);
}

export default NaverLogin;
