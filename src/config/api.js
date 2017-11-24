class Api {
  URL = 'https://api.github.com/repos';

  getRepository = async (name) => {
    let res = await fetch(`${this.URL}/${name}`);
    res = await res.json();

    return {
      image: res.owner.avatar_url,
      name: res.name,
      subtitle: res.owner.login,
      payload: res.full_name
    };
  }

  getIssues = async (name) => {
    let res = await fetch(`${this.URL}/${name}/issues`);
    res = await res.json();

    return res.map(item => ({
      id: item.id,
      image: item.user.avatar_url,
      name: item.title,
      subtitle: item.user.login,
      payload: item.html_url,
      state: item.state
    }));
  }
}

export default new Api();
