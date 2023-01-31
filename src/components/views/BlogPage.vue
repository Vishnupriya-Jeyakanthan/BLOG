<template>
    <div>
        <div class="blogpg">
            <br>
                <a id="allques">ALL QUESTIONS</a>
                <span id="blogques">

           <a id="doubt">Have a doubt?? </a> &nbsp;&nbsp;&nbsp; 
            <button id="askques" @click="askques()">Ask Question</button> 
            </span>            
    </div>
<br>
<br>
<div>
    <section>
            <ul v-for="blogs in displayblogs" :key="blogs.title">
                <li>
                    <a id="createdby" style="text-align:right">Created by: {{ blogs.createdatetime }} </a> <br>

                    <a> <b id="questitle" @click="quesdescription(blogs.blogid)">{{ blogs.title }} </b></a>
                    <br>
                    <button @click="upvote()">
                        <img src="https://static-00.iconduck.com/assets.00/upvote-icon-512x410-or1ialpv.png" alt="upvoteicon" width="10px" height="20px">{{  }}
                        {{ blogs.upvotes }}
                    </button>    
                    
                    <a  @click="description(blogs.blogid)"> {{ blogs.blogdescription }}</a> <br>
                    
                    <button @click="downvote()">
                        <img src="https://static-00.iconduck.com/assets.00/downvote-icon-512x282-jzteu88x.png" alt="downvoteicon" width="10px" height="20px" >{{  }}
                        {{ blogs.downvotes }}
                    </button>
                    
                    <div id="replyicon">
                        <button>
                            <img src="https://static.thenounproject.com/png/582750-200.png" alt="replyicon" width="10" height="20px" id="replybut" @click="replypage(blogs.blogid)">
                        </button>
                    </div>
                    <button v-if="blogs.isclosed" id="accepted" style="background-color:green">Accepted</button>
                    <button v-else id="accepted" style="background-color:red">Not Accepted</button>
                <br>    
                <span id="answerbox"></span>
                <hr>
                </li>
            </ul>
    </section>
</div>
</div>
</template>
<p v-if="isErrorOccured">There is some issue, please try after some time</p>
<script>
</script>
<script src="../scripts/BlogPage.js"></script>
<style scoped>
@import url('../styles/BlogPage.css');
</style>