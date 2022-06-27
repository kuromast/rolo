export default {

  async fetch(request, env) {

    let url = new URL(request.url);

    if (url.pathname.startsWith('/')) {

      url.hostname = 'yes.945984nh496.workers.dev'

      let new_request = new Request(url, request);

      return fetch(new_request);

    }

    return env.ASSETS.fetch(request);

  },

};



