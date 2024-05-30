<template>
  <div id="1" class="container">
    <div class="image">
      <img
        src="https://images.unsplash.com/photo-1715604535453-4e468e0c0fca?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>

    <div class="image-footer">
      <section>
        <h2>
          Dein eigenes Portfolio <br />
          mit wenigen clicks
        </h2>
        <p>
          Mit Tatu gibstu duuu lo lorem ipsum dies dasdeinem Business mühelos auch online ein Zuhase
        </p>
      </section>
      <div class="btn">
        <a href="#2"><button>ok.</button></a>
      </div>
    </div>
  </div>

  <!-- container 2 -->

  <div id="2" class="container">
    <div class="image">
      <img
        src="https://images.pexels.com/photos/18689001/pexels-photo-18689001/free-photo-of-fischen-angeln-licht-meer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>

    <div class="image-footer">
      <section>
        <h2>
          Tätowierer in der Nähe <br />
          einfach finden
        </h2>
        <p>Ausgewählte Tatto Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      </section>
      <div class="btn">
        <a href="#3"><button>ok.</button></a>
      </div>
    </div>
  </div>

  <!-- container 3 -->

  <div id="3" class="container">
    <div class="image">
      <img
        src="https://images.pexels.com/photos/10632123/pexels-photo-10632123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>

    <div class="image-footer">
      <section>
        <h2>Übersichtlicher Kalender mit deinem Terminen.</h2>
        <p>
          Mit Tatu gibstu duuu lo lorem ipsum dies dasdeinem Business mühelos auch online ein Zuhase
        </p>
      </section>
      <div class="btn">
        <a href="#3"><button>ok.</button></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  height: 70vh;
}

img {
  height: 70vh;
  width: 100%;
}

.image-footer {
  background-color: rgb(30, 30, 38);
  height: 30vh;
}

h2 {
  padding: 1.5rem 1rem 0 1rem;
  color: white;
  /* font-size: 20px; */
}

p {
  /* color: white; */
  /* padding: var(--padding); */
  padding: 1rem 1rem 0 1rem;
  font-size: 14px;
}

/* button {
  background-color: gold;
  padding: 0.4rem 2.5rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  border: none;
} */

.btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  margin-top: 2rem;
}
</style>
