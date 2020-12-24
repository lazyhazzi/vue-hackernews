<template>
	<div>
		<ul class="list">
			<li class="post" v-for="item in listItems">
				<div class="points">{{item.points || '-'}}</div>
				<div>
					<p class="title">
						<template v-if="item.domain">
							<a v-bind:href="item.url">{{item.title}}</a>
						</template>
						<template v-else>
							<router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>
						</template>
					</p>
					<small class="link-text">
						{{item.time_ago}}
						by
						<router-link v-if="item.user" v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
						<span v-else>{{item.domain}}</span>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		listItems() {
			const name = this.$route.name;
			switch (name) {
				case "news":
					return this.$store.state.news;
					break;
				case "ask":
					return this.$store.state.ask;
					break;
				case "jobs":
					return this.$store.state.jobs;
					break;
				default:
					return;
			}
		}
	},
	created() {
		// this.$store.dispatch("FETCH_NEWS");
		const name = this.$route.name;
		switch (name) {
			case "news":
				this.$store.dispatch("FETCH_NEWS");
				break;
			case "ask":
				this.$store.dispatch("FETCH_ASK");
				break;
			case "jobs":
				this.$store.dispatch("FETCH_JOBS");
				break;
			default:
				return;
		}
	}
};
</script>

<style scoped>
.list {
	margin: 0;
	padding: 0;
}
.post {
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
}
.points {
	width: 80px;
	text-align: center;
	flex-shrink: 0;
	color: #42b883;
}
.link-text {
	color: #777;
}
</style>

