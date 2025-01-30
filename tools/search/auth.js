import DA_SDK from 'https://da.live/nx/utils/sdk.js';

const ORG_MAP = {
  'da-bacom': 'BACOM',
  'da-helpx': 'HELPX'
}

const VITE_NAKSHA_API_URL = 'https://wcms-milostudio-service-deploy-ethos501-prod-or2-6c8256.cloud.adobe.io/apis';

async function createProfile(token, defaultTenant) {
  const url = `${VITE_NAKSHA_API_URL}/da/v1/profile/create`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ 'defaultTenant': defaultTenant }),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },  
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error(error.message);
  }
}

async function getProfile(token) {
  const url = `${VITE_NAKSHA_API_URL}/da/v1/profile`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },  
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error(error.message);
  }
}


(async function init() {
  try {
    document.body.style.visibility = 'hidden'; 

    const { context: { repo }, token } = await DA_SDK;
    const tenant = repo.replace('-', '_');
    const currentTenant = ORG_MAP[repo]

    window.sessionStorage.setItem('da-repo', JSON.stringify(tenant))
    window.sessionStorage.setItem('da-token', JSON.stringify(token))

    if (!token) {
      document.body.innerHTML = `
        <div style='display: flex; align-items: center; justify-content: center; height: 100vh; flex-direction: column;'>
          <h2>Please sign in to continue</h2>
        </div>
      `;
      document.body.style.visibility = 'visible';
      return;
    }

    let profile;
    try {
      profile = await getProfile(token);
    } catch (error) {
      if (error.message.includes('Response status: 404')) {
        console.warn('Profile not found. Creating profile...');
        await createProfile(token, currentTenant);
        profile = await getProfile(token);
      } else {
        throw error;
      }
    }
    console.log('Final profile:', profile);
    document.body.style.visibility = 'visible';

  
  } catch (error) {
    console.error('Error initializing DA_SDK:', error);
  }
})();


