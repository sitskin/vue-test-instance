<template>
	<div class="stylesContainer">

		<div class="title headline-text-view"> Typography </div>

		<div class="style headline-text-view">
			Headline - 28px, bold
		</div>
		<div class="style title-text-view">
			Title - 24px, bold
		</div>
		<div class="style subtitle-text-view">
			Subtitle - 20px, bold
		</div>
		<div class="style copy-text-view">
			Copy - 16px, normal
		</div>
		<div class="style subcopy-text-view">
			Subcopy - 16px, normal
		</div>
		<div class="style urgentcopy-text-view">
			Urgent Copy - 16px, bold
		</div>
		<div class="style inline-link-text-view">
			Inline Link - 16px, underlined
		</div>
		<div class="style subtext-text-view">
			Subtext - 12px, normal
		</div>

		<div class="title headline-text-view"> Palette </div>

		<div class="style palette hop-orange-background">
			Hop Orange - #FF803B
		</div>
		<div class="style palette hop-red-background">
			Hop Red - #FF403b
		</div>
		<div class="style palette hop-charcoal-background">
			Hop Charcoal - #555555
		</div>
		<div class="style palette hop-gray-background">
			Hop Gray - #B5B5B5
		</div>
		<div class="style palette hop-silver-background">
			Hop Silver - #EFEFEF
		</div>
		<div class="style palette hop-white-background">
			Hop White - #FFFFFF
		</div>

		<div class="title headline-text-view"> Controls </div>

		<div class="title title-text-view"> Calls To Action </div>

		<div class="style cta">
			<button @click="advancingClick" class="advancing-cta-button"> Advancing CTA </button>
		</div>
		<div class="style cta">
			<button @click="advancingGiantClick" class="advancing-cta-button giant"> Giant CTA </button>
		</div> 
		<div class="style cta">
			<button @click="lateralClick" class="lateral-cta-button"> Lateral CTA </button>
		</div>
		<div class="style cta">
			<button @click="" class="advancing-cta-button disabled"> Advancing Disabled </button>
		</div>
		<div class="style cta">
			<button @click="" class="advancing-cta-button giant disabled"> Giant Disabled </button>
		</div>
		<div class="style cta">
			<button @click="" class="lateral-cta-button disabled"> Lateral Disabled </button>
		</div>
		<div class="style cta">
			<button @click="weHateThisClick" class="we-hate-this-cta-button"> We Hate This CTA </button>
		</div>

		<div class="title title-text-view"> Human Input Bar </div>

		<div class="style hib">
			<human-input-bar inputType="text" hint="Human Input Bar" />
		</div>
		<div class="style hib">
			<human-input-bar :showCamera="true" inputType="text" hint="Human Input Bar with Camera" />
		</div>
		<div class="style hib">
			<human-input-bar :showPlus="true" inputType="text" hint="Human Input Bar with Plus" />
		</div>

		<div class="title title-text-view"> Text Input </div>

		<div class="style">
			<input type="text" class="edit-text-input" placeholder="Begin typing here...">
		</div>

		<div class="title title-text-view"> Chart </div>

		<div class="style chart">
			<chart :id="chart1.id" :options="chart1.options" />
		</div>
	</div>
</template>

<script>

	import HumanInputBar from '@/components/Core/HumanInputBar';
	import Chart from '@/components/Core/Chart';

	var styleGuideData = {
		hibInput: '',
		chart1: {
			id: 'chart1',
			options: {
				data: {
					labels: [ 'Jan', 'Feb', 'Mar' ],
					datasets: [
						{
							name: 'Amli on 2nd',
							values: [ 2, 5, 9 ],
						},
						{
							name: 'The Davis SoCo',
							values: [ 1, 3, 4 ],
						},
						{
							name: 'The Kensie Domain',
							values: [ 8, 6, 2 ],
						},
					],
				},
				title: 'Redemptions',
				colors: [ '#555555', '#FF803B', '#FF403B' ],
				height: 200,
				type: 'bar',
			},
		},
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
			advancingGiantClick: ( event ) => {
				console.log( 'advancing giant cta click' );
			},
			weHateThisClick: ( event ) => {
				console.log( 'we hate this click' );
			},
			lateralClick: ( event ) => {
				console.log( 'lateral cta click' );
			},
		},
		components: { HumanInputBar, Chart },
	};
</script>

<style lang="less" scoped>

	@import "Core/colors.less";

	.style, .title {
		margin-bottom: 16px;
	}
	.stylesContainer {
		display: flex;
		flex-flow: column;
		align-items: flex-start;
	}
	.palette {
		height: 60px;
		padding: 8px;
		align-self: stretch;
		text-align: left;
		font-size: 20px;
		font-weight: bold;
		border-radius: 4px;
	}
	.cta, .hib, .chart {
		align-self: stretch;
	}
	button {
		width: 100%;
	}
  .hop-orange-background {
    background: @hop_orange;
    color: @hop_white;
  }
  .hop-red-background {
    background: @hop_red;
    color: @hop_white;
  }
  .hop-charcoal-background {
    background: @hop_charcoal;
    color: @hop_white;
  }
  .hop-gray-background {
    background: @hop_grey;
    color: @hop_white;
  }
  .hop-silver-background {
    background: @hop_silver;
    color: @hop_charcoal;
  }
  .hop-white-background {
    background: @hop_white;
    color: @hop_charcoal;
		border: 1px solid @hop_charcoal;
  }
</style>