<template>
	<div class="stylesContainer">
		<div class="title"> Hop WebApp Style Guide </div>
		<div class="style">
			<button @click="advancingClick" class="advancing-cta-button"> Advancing </button>
		</div>
		<div class="style">
			<button @click="advancingClick" class="advancing-cta-button giant"> Advancing Giant </button>
		</div> 
		<div class="style">
			<button @click="weHateThisClick" class="we-hate-this-cta-button"> We Hate This </button>
		</div>
		<div class="style">
			<button @click="lateralClick" class="lateral-cta-button"> Lateral </button>
		</div>
		<div class="style">
			<button @click="" class="advancing-cta-button disabled"> Advancing Disabled </button>
		</div>
		<div class="style">
			<button @click="" class="advancing-cta-button giant disabled"> Advancing Giant Disabled </button>
		</div>
		<div class="style">
			<button @click="" class="lateral-cta-button disabled"> Lateral Disabled </button>
		</div>
		<div class="style headline-text-view">
			Headline Text View
		</div>
		<div class="style title-text-view">
			Title Text View
		</div>
		<div class="style subtitle-text-view">
			Subtitle Text View
		</div>
		<div class="style copy-text-view">
			Copy Text View
		</div>
		<div class="style bold-copy-text-view">
			Bold Copy Text View
		</div>
		<div class="style subcopy-text-view">
			Subcopy Text View
		</div>
		<div class="style urgentcopy-text-view">
			Urgentcopy Text View
		</div>
		<div class="style subtext-text-view">
			Subtext Text View
		</div>
		<div class="style">
			<input class="human-input-bar" placeholder="Human Input Bar" v-model="hibInput"/>
		</div>
	</div>
</template>

<script>
	var styleGuideData = {
		hibInput: "",
	};

	export default {
		name: 'StyleGuide',
		data() {
			return styleGuideData;
		},
		methods: {
			advancingClick: ( event ) => {
				console.log( 'advancing cta click' );
			},
			weHateThisClick: ( event ) => {
				console.log( 'we hate this click' );
			},
			lateralClick: ( event ) => {
				console.log( 'lateral cta click' );
			},
		},
		components: {},
	};
</script>

<style lang="less" scoped>
	.style {
		border-top: 1px solid #555555;
		padding: 5px;
		&:last-child {
			border-bottom: 1px solid #555555;
		}
	}
</style>