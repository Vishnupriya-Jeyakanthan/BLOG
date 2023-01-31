<template>
    <div>
        <h1>{{  }}</h1>
      <a>Asked by : {{  }} Viewd : {{  }}</a>
      <hr>
     <a>
        <button>
            <img src="https://static-00.iconduck.com/assets.00/upvote-icon-512x410-or1ialpv.png" alt="upvoteicon" width="10px" height="20px">{{  }}
        </button>
        
        
                    <h1 id="ques">Define C programming Language {{  }}</h1>
                    <p id="answ" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                    necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                    aperiam. Perspiciatis, {{  }} porro! <br>
                    </p>      
                    <!-- <i class="fa fa-angle-up" @click="upvote"></i>
                    <i class="fa fa-angle-down" @click="downvote"></i> -->
                    
                    <button>
                        <img src="https://static-00.iconduck.com/assets.00/downvote-icon-512x282-jzteu88x.png" alt="downvoteicon" width="10px" height="20px" >{{  }}
                    </button>
                    
                    <button>
                        <img src="https://static.thenounproject.com/png/582750-200.png" alt="replyicon" width="10" height="20px" id="replybut">
                    </button>
        <br>
        <br>
        <div id="comments">
            <!-- <input type="text" id="comm">{{ ans.com }} -->
        </div>
     </a> 
     <i class="fa fa-reply" aria-hidden="true" id="replybut"></i>
     <router-view/>
    </div>
</template>

<style scoped>
        #replybut{
            display: flex;
            justify-content: flex-end;
        }
</style>
<script src="../scripts/ReplyPage.js"></script>