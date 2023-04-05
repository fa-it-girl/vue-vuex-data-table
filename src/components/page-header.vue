<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter">Table data</h3>
    </div>
  </div>
</div>
</template>

<style>
  .nav-link{
    margin-left: 40px;
    color: white !important;
  }

  .navbar{
    height: 60px;
    margin-bottom: 80px;
    background-color: #38598b !important;
  }

  .animate-charcter{
   text-transform: uppercase;
   background-image: linear-gradient(
    -225deg,
    #113f67 0%,
    #38598b 29%,
    #a2a8d3 67%,
    #e7eaf6 100%
  );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 50px;
}

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
}

</style>
