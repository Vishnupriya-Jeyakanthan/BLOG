<template>
    <div class="addtag">
      <div class="newtagdiv">
        <form class="newtag" @submit.prevent="addnewtag()">
          <h3>ADD NEW TAG..</h3>
            <label for="newtag" id="newtagtitle">New Tag title</label>
            <input type="text" id="titlebox" placeholder="Enter your tag title..." required v-model="newTag.tagName"> <br>
            <label for="description">Add your tag description below </label> 
            <input type="text" id="tagdescription" placeholder="Enter your tag description..."  required v-model="newTag.tagDescription"> <br>
            <label for="created by">Created by</label>
            <input type="number" id="createdbyId" placeholder="Enter your id here..." required v-model="newTag.createdby"> <br>
            <button @click="addnewtag()" id="newtagbut">ADD TAG</button>
        </form> 
      </div>
    </div>
  </template>
  <script src="../scripts/AddNewTag.js"></script>
  <style scoped>
@import url('../styles/AddNewTag.css');
</style>