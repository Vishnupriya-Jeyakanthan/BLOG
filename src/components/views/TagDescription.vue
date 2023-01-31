<template>
<div>
    <h3>
        TAGS
    </h3>
    <h5 id="def">A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</h5>
    <button id="newtag" @click="newtag()">ADD NEW TAGS</button>
    <div class="options">
            <ul v-for="tags in list" :key="tags.tagname">
                <section>
                    <h1>Tag Name :{{ tags.tagname}}</h1>
                    <p>Tag Description: {{ tags.tagdescription }}</p> <br>
                </section>
            </ul>
         </div>
</div>
</template>
<script src="../scripts/TagDescription.js">
</script>
<style scoped>
section
{
    display: block;    
    width: 100%; 
    border: 1px solid black;
    width: 250px;   
}
h1{
    text-align: left;
}
p{
  /* border: 1px solid black; */
  text-align: left;
  /* color: white;
  background-color: #12b7bd; */
}
#newtag{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

</style>