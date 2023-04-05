<template>
  <footer>
    <div class="footer">
      <div class="footer-links">
        <a href="https://github.com/fa-it-girl"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="https://www.linkedin.com/in/fakhriyya-rahimova/"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
      </div>

      <div class="footer-copyright">
        This footer is made with <font-awesome-icon icon="fa-solid fa-heart" /> by Fakhriyya
      </div>
    </div>

  </footer>
</template>

<style scoped>
  .footer {
  background:  #113f67;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0px 50px;

  width: 100%;
}
.footer-links {
  display: flex;
  align-items: center;
}
.footer-links a {
  color: white;
  opacity: 0.15;
  text-decoration: none;
  font-size: 24px;
  padding: 0px 10px;
}

.footer-links a:hover {
  opacity: 1;
}
.footer .fa-heart {
  color: #D23333;
}

.footer-copyright{
  color: white;
}
</style>
