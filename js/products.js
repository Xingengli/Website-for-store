Vue.component('product',{
    props:{
        index: {
            type: String,
            required: true,
        }
     }, /*custom attribute to pass data in components*/
    template: /*declarative syntax for building user interfaces*/
    `
       <div class="product">
        <div class="product-border">
<!--V-bind: used to dynamically bind data or component properties to HTML attributes-->
            <img v-bind:src="variants[index].image">
        </div>

        <div class="product-description">
            <h1>{{variants[index].name}}</h1>
            <p>In Stock</p>
<!--V-on: used to attach event listeners to DOM elements and bind them to corresponding methods in the Vue component.
click for calling the change status function-->
            <p>
                <span v-on:click="changeStatus(0)" style="text-decoration: underline">Shipping</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span v-on:click="changeStatus(1)" style="text-decoration: underline">Details</span>
            </p>
            <div>
<!--V-show: used to conditionally show or hide elements based on a boolean value.-->
                <span v-show="shippingDefaultValue">\${{shippingFee*10}}</span>

                <ul v-show="detailsDefaultValue">
                    <li v-for="des in variants[index].description">{{des}}</li>
                </ul>
            </div>
<!--click to call the addtocart function-->
            <button v-on:click="addToCart">Add to cart</button>
        </div>

        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
    </div>
    `,
    data() {
        return {
            variants:[
                {
                    name:'Basket',
                    image:'images/image_31.png',
                    quantities: 100,
                    description: ["vivid color","high volume","easy to carry"]
                },
                {
                    name:'Phone case',
                    image:'images/image_32.png',
                    quantities: 100,
                    description: ["Blue color","great material","well protecting"]
                },
                {
                    name:'Bag',
                    image:'images/image_33.png',
                    quantities: 100,
                    description: ["easy to carry","high volume","great material"]
                },
                {
                    name:'Toilet tissues',
                    image:'images/image_35.png',
                    quantities: 100,
                    description: ["great material","Best touch","attracting price"]
                },
            ],
            cart: 0,
            shippingFee: 0,
            shippingDefaultValue: false,
            detailsDefaultValue: false
        }
    },
    methods:{
        addToCart: function () {
            this.cart ++
            this.shippingFee++
        },
        /*function to achieve add to cart(number increase by clicking)*/
        changeStatus: function (status) {
            if (status == 0) {
                this.shippingDefaultValue = true
                this.detailsDefaultValue = false
            }
            else if (status == 1) {
                this.detailsDefaultValue = true
                this.shippingDefaultValue = false
            }
        }
    }

})

Vue.component('forms',{
    template:
    `
    <div class="form-border">
        <form action="#" class="form">
            <h2>Feedback
            </h2>
            <label for="item">Item:</label>
            <br/>
            <input type="text" id="item" required>

            <br/>

            <label for="review">Review:</label>
            <br/>
            <textarea id="review" cols="30" rows="10"></textarea>

            <br/>

            <label for="rate">Rating</label>
            <select name="rate" id="rate">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <br/>
<!--click to call the function 'submit'-->
            <button type="submit" v-on:click="submit">Submit</button>
        </form>
    </div>
    `,
    methods: {
        submit: function () {
            alert("Feedback Success")
        }
    }
})


var products = new Vue({
    el: "#product",

})

var form = new Vue({
    el: "#forms",

})
