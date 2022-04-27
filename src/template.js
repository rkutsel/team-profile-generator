const head = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/spectre.css/dist/spectre.min.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
    />
    <title>Team Profile Page</title>
  </head>
  <body>
    <header>
      <div class="hero bg-dark">
        <div class="hero-body p-centered">
          <h1 class="p-centered">My Team</h1>
        </div>
      </div>
    </header>
    <div class="container mt-2" style="display: flex; justify-content: space-around; gap: 15px 15px; flex-flow: row wrap">`;

let panelManager = (data) => {
  let panel = `
  <div class="container mt-2">
  <div class="columns">
  <div class="panel p-centered">
    <div class="panel-header bg-success">
      <div class="panel-title">
        <i class="icon icon-people"></i> ${data.name}
        <i class="icon icon-downward float-right"></i> 
      </div>
    </div>
    <div class="panel-nav"></div>
    <div class="panel-body">
      <ul class="menu">
        <li class="divider" data-content="Employee Info"></li>
        <li class="menu-item"><b> Role: ${data.getRole()}</b></li>
        <li class="divider"></li>
        <li class="menu-item">ID: ${data.id}</li>
        <li class="divider"></li>
        <li class="menu-item">
          <a href="mailto: ${
            data.email
          }"> <i class="icon icon-mail"></i> Email: ${data.email}</a>
          <div class="menu-badge"></div>
        </li>
        <li class="divider"></li>
        <li class="menu-item">
          <i class="icon icon-link"></i> Office: ${data.officeNumber}
        </li>
        <li class="divider"></li>
      </ul>
    </div>
    <div class="panel-footer"></div>
  </div>
  </div>
  </div>`;
  return panel;
};

let panelEngineer = (data) => {
  let panel = `
  <div class="panel mt-2">
    <div class="panel-header bg-primary">
      <div class="panel-title">
        <i class="icon icon-people"></i> ${data.name}
        <i class="icon icon-upward float-right"></i> 
      </div>
    </div>
    <div class="panel-nav"></div>
    <div class="panel-body">
      <ul class="menu">
        <li class="divider" data-content="Employee Info"></li>
        <li class="menu-item"><b>Role: ${data.getRole()}</b></li>
        <li class="divider"></li>
        <li class="menu-item">ID: ${data.id}</li>
        <li class="divider"></li>
        <li class="menu-item">
          <a href="mailto: ${
            data.email
          }"> <i class="icon icon-mail"></i> Email: ${data.email} </a>
          <div class="menu-badge"></div>
        </li>
        <li class="divider"></li>
        <li class="menu-item">
          <a href="${data.getGithub()}" target="_blank"> <i class="icon icon-link"></i> Github: ${
    data.github
  }</a>
        </li>
        <li class="divider"></li>
      </ul>
    </div>
    <div class="panel-footer"></div>
  </div>`;
  return panel;
};

let panelIntern = (data) => {
  let panel = `
  <div class="panel mt-2">
    <div class="panel-header bg-warning">
      <div class="panel-title">
        <i class="icon icon-people"></i> ${data.name}
        <i class="icon icon-upward float-right"></i> 
      </div>
    </div>
    <div class="panel-nav"></div>
    <div class="panel-body">
      <ul class="menu">
        <li class="divider" data-content="Employee Info"></li>
        <li class="menu-item"><b>Role: ${data.getRole()}</b></li>
        <li class="divider"></li>
        <li class="menu-item">ID: ${data.id}</li>
        <li class="divider"></li>
        <li class="menu-item">
          <a href="mailto: ${
            data.email
          }"> <i class="icon icon-mail"></i> Email: ${data.email} </a>
          <div class="menu-badge"></div>
        </li>
        <li class="divider"></li>
        <li class="menu-item">
          <i class="icon icon-link"></i> School: ${data.getSchool()}
        </li>
        <li class="divider"></li>
      </ul>
    </div>
    <div class="panel-footer"></div>
  </div>`;
  return panel;
};

const tail = `</div>
</div>
</body>
</html>`;

module.exports = { head, panelManager, panelEngineer, panelIntern, tail };
