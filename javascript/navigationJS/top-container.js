const topContainer = document.createElement('topContainer');
topContainer.innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
<a id="time-element" class="navbar-brand" href="#" onclick="switchDisplay()"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li>
      <a class="nav-link" href="https://www.linkedin.com/in/fredyfromslovakia/">LinkedIn</a>
    </li>
    <li>
      <a class="nav-link" href="https://github.com/fredyolha">GitHub</a>
    </li>
    <li>
      <a class="nav-link" href="mailto:fredyolha@gmail.com">Send mail</a>
    </li>
    <li>
      <a class="nav-link" href="imageassets.html">Image Assets</a>
    </li>
  </ul>
</div>
</nav>`

document.body.appendChild(topContainer);