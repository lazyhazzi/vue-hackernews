<template>
	<user-profile :info="userInfo">
		<span slot="karma" class="karma">karma : {{userInfo.karma}}</span>
	</user-profile>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
	components: {
		UserProfile
	},
	computed: {
		userInfo() {
			return this.$store.state.user;
		}
	},
	created() {
		const userName = this.$route.params.id;
		this.$store.dispatch("FETCH_USER", userName);
	}
};
</script>

<style>
</style>
