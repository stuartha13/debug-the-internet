export const panelTemplate = (jsonContent) => {
  const { albumId, title, thumbnailUrl } = jsonContent;

  return `
  <div class="col col--1/5-small">
    <div class="panel animate animate--fade-in">
      <div class="panel__head">
        <h3>${title}</h3>
      </div>
      <div class="panel__content">
        <img class="img-respond img-respond--fill" src="${thumbnailUrl}" />
      </div>
      <div class="panel__foot">
        <p>Album ID: ${albumId}</p>
      </div>
    </div>
  </div>
  `;
};
