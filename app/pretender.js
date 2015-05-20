function jsonResponse(json, status = 200) {
  return [status, {'Content-Type': 'application/json'}, JSON.stringify(json)];
}

export function defineProjectRoutes(fakeServer) {
  fakeServer.get('/api/bb_projects/projects/', request => {
    let json = {results: [{id: 'my-fake-project', title: 'my fake project'}]};
    return jsonResponse(json);
  });

  fakeServer.get('/api/bb_projects/projects/:projectId', request => {
    let json = {id: 'my-fake-project', title: 'my fake project'};
    return jsonResponse(json);
  });
}
