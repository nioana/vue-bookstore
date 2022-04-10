<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/cart/">Cart</router-link></li>
      <li><router-link to="/sign-in/">Sign In</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
    nav {
      background-color: #355E3B;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
    }

    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    ul li a{
      color: #fbfbf0;
      text-transform: uppercase;
      text-decoration: none;
      margin-right: 2.5rem;
      font-weight: 800
    }

    ul li a:hover {
      color: #FF5733;
    }

</style>