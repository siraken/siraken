<template>
  <div>

    <!-- container -->
    <div class="container mt-5 mb-5">

      <ul class="gallery-list">
        <li class="gallery-item">
          <a href="/img/profile.jpg" target="_blank"><img src="/img/profile.jpg" alt=""></a>
        </li>
        <li class="gallery-item">
          <a href="/img/dailyui.jpg" target="_blank"><img src="/img/dailyui.jpg" alt=""></a>
        </li>
        <li class="gallery-item">
          <a href="/img/firebeef.jpg" target="_blank"><img src="/img/firebeef.jpg" alt=""></a>
        </li>
        <li class="gallery-item">
          <a href="/img/sxsw.jpg" target="_blank"><img src="/img/sxsw.jpg" alt=""></a>
        </li>
        <li class="gallery-item">
          <a href="/img/toast.jpg" target="_blank"><img src="/img/toast.jpg" alt=""></a>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
export default {}
</script>

<style>
.gallery-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
.gallery-item {
  position: relative;
  left: 8px;
  width: 30%;
  margin: 5px;
}
.gallery-item:hover img {
  transform: scale(1.05);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.25);
}
.gallery-item::before {
  content: "";
  display: block;
  padding-top: 100%;
}

.gallery-item img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  object-fit: cover;
  transition: .2s;
}
</style>
