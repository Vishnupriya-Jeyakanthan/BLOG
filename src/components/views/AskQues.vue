<template>
  <div class="askpage">
    <div class="maindiv">  
      <form class="newQuespost" @submit.prevent="postques()">
        <label for="title" id="tip">Title</label> <br>
            <input type="text" id="titlebox" placeholder="Enter your title..." size="100" minlength="15" required v-model="newQuestion.title"> <br>

            <label for="details" id="detailip">What are the details of your problem?</label><br>
            <textarea name="details" id="details" cols="20" rows="10" placeholder="Enter the problems you faced..." minlength="20" v-model="newQuestion.blogdescription"></textarea> <br>

            <label for="expecting" id="expectingip">What did you try and what were you expecting?</label> <br>
            <textarea name="expecting" id="expecting" cols="1000" rows="10" placeholder="Type here..." minlength="10" v-model="newQuestion.thingstried"></textarea> <br>
          
            <!-- <h3 id="previewtitle">PREVIEW</h3> -->
            <!-- <textarea name="preview" id="preview" cols="30" rows="10"></textarea> <br> <br> -->
         <center>
          <span> 
            <button @click="postques()" id="postbut">Post your Question</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button @click="discarddraft()" id="discardbut">Discard Draft</button>
          </span>
         </center>
      </form>  
            
    </div>
  </div>

</template>

<style scoped>
@import url('../styles/AskQues.css');
</style>
<script src="../scripts/AskQues.js"></script>