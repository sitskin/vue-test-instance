<template>
	<div class="profile" >
		<img :src="meProfile.image.url" class="profileImage"/>
		<div class="profileName"> {{ meProfile.firstName }} {{ meProfile.lastName }} </div>
		<div class="profileEmail"> {{ meProfile.emailAddress }} </div>
		<div class="profilePhone"> {{ meProfile.phoneNumber }} </div>
		<div class="unreadConversations"> Unread Conversations: {{ meProfile.countOfUnreadConversations }} </div>
		<div v-for="(group, index) in meProfile.groups" class="group">
			<img :src="group.image.url" class="groupImage">
			<div class="groupName"> {{ group.name }} </div>
		</div>
	</div>
</template>

<script>
	import _ from 'underscore';
	import axios from 'axios';
	import Vue from 'vue';

	var infoVueData = {
		meProfile: {
			id: '',
			firstName: '',
			lastName: '',
			emailAddress: '' ,
			phoneNumber: '' ,
			locale: '' ,
			image: { url: '' } ,
			countOfNewNotifications: 0,
			groups: [] ,
			namedLocations: [],
			countOfUnreadConversations: 0,
		},
	};
	export default {
		name: "Info",
		data() {
			return infoVueData;
		},
		beforeCreate: () => {
			Vue.prototype.$http.get( '/me' ).then( response => { infoVueData.meProfile = response.data } );
		}
	};


</script>

<style lang="less" scoped>
	.profile {
		display: flex;
		flex-flow: column;
		align-items: center;
		.profileImage {
			width: 200px;
		}
		.group {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;
			border-bottom: 1px solid white;
			width: 100%;
			.groupImage {
				height: 40px;
				margin-top: 5px;
				margin-bottom: 5px;
			}
			.groupName {
				align-self: center;
			}
		}
	}
</style>