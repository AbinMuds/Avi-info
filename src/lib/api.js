const FIREBASE_DOMAIN = process.env.REACT_APP_FIREBASE_DOMAIN;
export async function getAllProjects() {
  const response = await fetch(`${FIREBASE_DOMAIN}/projects.json`);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch projects");
  }

  const transformedProjects = [];

  for (const key in data) {
    const projectObj = {
      id: key,
      ...data[key],
    };

    transformedProjects.push(projectObj);
  }

  return transformedProjects;
}

export async function getSingleProject(projectId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/projects/${projectId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch project");
  }

  const loadedProject = {
    id: projectId,
    ...data,
  };

  return loadedProject;
}

export async function addProject(projectData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/projects.json`, {
    method: "POST",
    body: JSON.stringify(projectData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not create project");
  }

  return null;
}

export async function getAllContact() {
  const response = await fetch(`${FIREBASE_DOMAIN}/contacts.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch contacts");
  }

  const transFormedContacts = [];

  for (const key in data) {
    const contactObj = {
      id: key,
      ...data[key],
    };

    transFormedContacts.push(contactObj);
  }

  return transFormedContacts;
}

export async function addContact(contactData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/contacts.json`, {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create contact");
  }

  return null;
}
