<template>
  <div class="text-customSlate text-sm sm:text-base font-mono flex justify-center py-10 hover:text-red font-bold shadow-xl text-black">
    <div>
      <a
        href="https://github.com/rasel-031/vue-js-course"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center hover:text-customGreen"
      >
      <p>GitHub</p>
        <p>Designed & Built by Rasel Bishwas</p>

        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <CiStar />
            <p>Vue JS</p>
          </div>
          <div className="flex items-center gap-1">
            <CiStar />
            <p>Tailwind-CSS</p>
          </div>
          <div className="flex items-center gap-1">
            <div>
                <font-awesome-icon icon="fa-solid fa-user" class=""/>
          </div>
            
            <p>2023</p>
          </div>
        </div>
      </a>
    </div>
 
  <font-awesome-icon icon="fa-user" class=""/>
</div>
</template>

<script>

export default {
  name: "FooterPage",
};
</script>

<style></style>
