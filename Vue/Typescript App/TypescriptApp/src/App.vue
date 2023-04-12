<script setup lang="ts">
import { GENDER } from "@/enums";
import type { IInvitee } from "@/interfaces";
import Card from "./components/Cards.vue";

import { computed, ref } from "vue";

const name = ref("");
const gender = ref(GENDER.MALE);
const invitees = ref<IInvitee[]>([]);

const addInvitee = (): void => {
	if (name.value) {
		invitees.value.push({
			id: Math.floor(Math.random() * 1000000),
			name: name.value,
			gender: gender.value,
		});

		name.value = "";
		gender.value = GENDER.MALE;
	}
};

const count = computed<{
	female: number;
	male: number;
}>(() => {
	return invitees.value.reduce(
		(countObj, invitee) => {
			if (invitee.gender === GENDER.MALE) {
				return {
					...countObj,
					male: countObj.male + 1,
				};
			} else {
				return {
					...countObj,
					female: countObj.female + 1,
				};
			}
		},
		{ female: 0, male: 0 }
	);
});
</script>

<template>
	<main>
		<div>
			<h1>People Invited to My Party</h1>
			<div class="input-container">
				<input
					v-model="name"
					type="text"
					placeholder="Name..."
					@keypress.enter="addInvitee"
				/>

				<select v-model="gender" @keypress.enter="addInvitee">
					<option :value="GENDER.MALE">Male</option>
					<option :value="GENDER.FEMALE">Female</option>
				</select>
			</div>

			<div class="cards-container">
				<Card
					v-for="invitee in invitees"
					:key="invitee.id"
					:invitee="invitee"
				/>
			</div>

			<div>
				<p>Females - {{ count.female }}</p>
				<p>Males - {{ count.male }}</p>
			</div>
		</div>
	</main>
</template>

<style scoped>
main {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: antiquewhite;
}

input,
select {
	width: 100%;
	padding: 5px;
	margin-bottom: 2px;
}
</style>
