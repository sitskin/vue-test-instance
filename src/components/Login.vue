<template>
	<div id="login-app">
		<img src="../assets/hop-logo.png" class="hopLogo">
		<div class="form">
			<div class="phone" :class="{ hidden: hidePhone }">
				Enter Phone Number
				<br>
				<the-mask mask="(###) ###-####" class="inputPhone" v-model="phoneNumber" type="tel" placeholder="(###) ###-####"></the-mask> 
				<br>
				<button @click="submitPhone" class="submitPhone advancing-cta-button"> Submit </button>
			</div>
			<div class="pin" :class="{ hidden: hidePin }">
				Enter Pin
				<br>
				<input type="number" class="inputPin" v-model="pinNumber">
				<br>
				<button @click="submitPin" class="submitPin advancing-cta-button"> Submit </button>
			</div>
		</div>
		<router-link :to="routeToInfo"> Go to Info </router-link>
	</div>
</template>

<script>

	import _ from 'underscore';
	import axios from 'axios';
	import Vue from 'vue';
	import { TheMask } from 'vue-the-mask';

	var loginVueData = {
		hidePhone: false,
		hidePin: true,
		phoneNumber: '',
		pinNumber: '',
		oAuth: {
	    username: '8856393294408',
	    password: '',
	  },
	};

	export default {
		name: 'Login',
		data() {
			return loginVueData;
		},
		components: { TheMask },
		computed: {
			routeToInfo: () => {
				return location.hash.match( '/dev/' ) ? '/dev/info' : '/info';
			}
		},
		methods: {
			submitPhone: ( event ) => {
				Vue.prototype.$http.post( `/register/phones?phone=+1${ loginVueData.phoneNumber }` )
				.then( response => {
					loginVueData.hidePhone = true;
					loginVueData.hidePin = false;
					loginVueData.pinNumber = response.headers.pin;
				});
			},
			submitPin: ( event ) => {
				var qs = require( 'qs' );
				Vue.prototype.$http.post( '/oauth2/token', qs.stringify( {
					username: loginVueData.phoneNumber,
					password: loginVueData.pinNumber,
				  grant_type: 'password',
				} ), { auth: loginVueData.oAuth } )
				.then( response => {
					// call the browser api call to set headers
					Vue.prototype.$http.post( '/browser', response.data )
						.then( res => {
							Vue.prototype.$http.get( '/me' ).then( r => {} );
						} );
					loginVueData.hidePin = true;
					// re-route to main page ???

				});
			},
		},
	};

</script>

<style lang="less" scoped>
	.hidden {
		display: none;
	}
	.hopLogo {
		width: 300px;
	}
	.form {
		margin-top: 20px;
		margin-bottom: 16px;
		.phone {
			font-size: 17px;
			font-weight: bold;
			.inputPhone {
				text-align: center;
				margin-top: 8px;
				margin-bottom: 16px;
				font: inherit;
				// border: 1px solid #D8D8D8;
				border: none;
				border-radius: 4px;
				&:focus {
					outline: none;
				}
			}
			.submitPhone {
				
			}
		}
		.pin {
			.inputPin {
				text-align: center;
				margin-top: 8px;
				margin-bottom: 16px;
				font: inherit;
				border: 1px solid #D8D8D8;
				border-radius: 4px;
				&:focus {
					outline: none;
				}
			}
			.submitPin {

			}
		}
	}
</style>