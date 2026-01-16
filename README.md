# IPL Social

![CI Status](https://github.com/Ilyas-ks/IPL-social/actions/workflows/main.yml/badge.svg)

## Informations Étudiant
* **Nom :** Koklis
* **Prénom :** Ilyas
* **Email Vinci :** ilyas.koklis@student.vinci.be
* **Dépôt GitHub :** https://github.com/9ilyasK/ipl-social2.git

---

## Présentation du Projet
Ce projet constitue le noyau fonctionnel de l'application **IPL Social**. Il a été développé dans le cadre de l'examen de DevOps, avec un focus strict sur l'automatisation, la qualité du code et les tests.

Le projet est en **TypeScript**.

---

## Méthodologie & Architecture

### 1. Développement Piloté par les Tests (TDD)
L'intégralité des fonctionnalités a été développée suivant le cycle **Red-Green-Refactor**.
L'historique des commits témoigne de cette approche (Test d'abord :arrow_right: Échec :arrow_right: Code :arrow_right: Succès).

* **Tests Unitaires :** Réalisés avec **Jest**.
* **Couverture :** Validation des emails (`email.test.ts`).

### 2. Intégration Continue (CI/CD)
Une pipeline **GitHub Actions** (`.github/workflows/main.yml`) est configurée pour s'exécuter à chaque `push`. Elle garantit la non-régression du code en effectuant automatiquement :
1.  L'installation des dépendances.
2.  L'exécution de la suite de tests complète.

### 3. Logique Algorithmique (Validation Email)
Conformément aux consignes, la validation d'email (`email.ts`) a été conçue **sans utiliser d'expressions régulières (Regex)** ni de librairies externes.
L'algorithme vérifie manuellement les contraintes via la manipulation de chaînes (`split`, `indexOf`, etc.) :
* Présence et unicité du `@`.
* Présence de texte avant et après le séparateur.
* Présence d'un point dans le domaine (non final).
* Absence d'espaces.

---

## Installation et Exécution

Pour tester ce projet localement :

### 1. Installation
```bash
npm install
