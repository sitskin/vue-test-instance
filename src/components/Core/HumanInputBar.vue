<template>
	<div class="human-input-bar">

		<!-- <img src="../../assets/ic_camera_large.png" class="human-input-bar-camera" :class="{ hidden: ! showCamera }" @click="clickCamera"> -->
		<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24" class="human-input-bar-camera" :class="{ hidden: ! showCamera }" @click="clickCamera">
			<path fill="#B5B5B5" d="M12,12m-3.2,0a3.2,3.2 0,1 1,6.4 0a3.2,3.2 0,1 1,-6.4 0" stroke-width="0" />
			<path fill="#B5B5B5" d="M9,2L7.17,4H4c-1.1,0 -2,0.9 -2,2v12c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2h-3.17L15,2H9zm3,15c-2.76,0 -5,-2.24 -5,-5s2.24,-5 5,-5 5,2.24 5,5 -2.24,5 -5,5z" stroke-width="0" />
		</svg>

		<img src="../../assets/ic_hib_plus.png" class="human-input-bar-plus" :class="{ hidden: ! showPlus }" @click="clickPlus">
		<input class="human-input-bar-input" :type="inputType" :placeholder="hint" :value="inputValue" >
		<button class="human-input-bar-submit"> Send </button>
	</div>
</template>

<script>
	
	import Vue from 'vue';

	var hibVueData = {
		inputValue: '',
		clickCamera: ( event ) => {
			cameraClick();
		},
		clickPlus: ( event ) => {
			plusClick();
		},
		clickSend: ( event ) => {
			sendClick( inputValue );
		}
	};

	export default {
		name: 'HumanInputBar',
		data() {
			return hibVueData;
		},
		props: {
			showCamera: {
				type: Boolean,
				default: false,
			},
			cameraClick: {
				type: Function,
				default: () => {},
			},
			showPlus: {
				type: Boolean,
				default: false,
			},
			plusClick: {
				type: Function,
				default: () => {},
			},
			inputType: {
				type: String,
				default: 'text',
			},
			hint: {
				type: String,
				default: '',
			},
			sendClick: {
				type: Function,
				default: ( text ) => {},
			},
		},
	};
</script>

<style lang="less" scoped>

	@import "colors.less";

	.human-input-bar {
		display: flex;
		flex-flow: row nowrap;
		width: 100%;
		.hidden {
			display: none;
		}
		.human-input-bar-camera {
			flex: 0 1 auto;
			width: 30px;
			height: 30px;
			margin-left: 4px;
			margin-right: 4px;
		}
		.human-input-bar-plus {
			flex: 0 1 auto;
			width: 30px;
			height: 30px;
			padding: 6px 6px 6px 0px;
		}
		.human-input-bar-input {
			flex: 1 1 auto;
	    color: @hop_charcoal;
	    font-size: 16px;
	    font-weight: normal;
	    padding: 12px;
	    background: @hop_silver;
	    border: none;
	    border-radius: 4px;
	    &::placeholder {
	      color: @hop_grey;
	    }
	    &:focus {
	      outline: none;
	    }
	  }
	  .human-input-bar-submit {
	  	flex: 0 1 auto;
	  	padding: 12px 8px;
	  	color: @hop_grey;
	  	margin-left: 8px;
	  	font-size: 16px;
	  	font-weight: bold;
	  	background: transparent;
	  	border: none;
	  	align-self: flex-end;
	  }
	}
	
</style>