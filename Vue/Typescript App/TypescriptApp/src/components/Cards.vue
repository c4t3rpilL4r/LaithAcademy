<script setup lang="ts">
import { GENDER } from "@/enums";
import type { IInvitee } from "@/interfaces";

defineProps<{
	invitee: IInvitee;
}>();
</script>

<template>
	<div
		:style="{
			backgroundColor:
				invitee.gender === GENDER.MALE
					? 'rgb(8,111,111)'
					: 'rgb(111,18,8)',
		}"
	>
		{{ invitee.name }}
	</div>
</template>

<style scoped>
div {
	border-radius: 5px;
	margin-top: 5px;
	text-align: center;
	padding: 3px;
	color: white;
}
</style>
