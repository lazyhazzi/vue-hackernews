<template>
	<div>
		<p>{{itemInfo.title}}</p>
		<div>{{itemInfo.time_ago}}</div>
		<div>{{itemInfo.user}}</div>
	</div>
</template>

<script>
export default {
	computed: {
		itemInfo() {
			return this.$store.state.item;
		}
	},
	created() {
		const itemId = this.$route.params.id;
		this.$store.dispatch("FETCH_ITEM", itemId);
	}
};
</script>

<style>
</style>
