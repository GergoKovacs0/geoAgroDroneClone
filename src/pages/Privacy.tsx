import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-start min-vh-80 py-5">
      <div className="text-center p-5 shadow-lg rounded bg-light w-75">
        
        <h2 className="mt-4">1. Bevezetés</h2>
        <p>
          Az Ön adatainak védelme fontos számunkra. Ez az adatvédelmi irányelv
          ismerteti, hogy milyen információkat gyűjtünk, hogyan használjuk fel azokat,
          és hogyan védjük meg az Ön személyes adatait.
        </p>
        
        <h2 className="mt-4">2. Gyűjtött információk</h2>
        <ul className="text-start">
          <li>Személyes adatok (név, e-mail cím, telefonszám stb.).</li>
          <li>Technikai adatok (IP-cím, böngésző típusa, eszköz adatok).</li>
          <li>Cookie-k és hasonló technológiák által gyűjtött adatok.</li>
        </ul>
        
        <h2 className="mt-4">3. Az adatok felhasználása</h2>
        <p>
          Az összegyűjtött információkat az alábbi célokra használjuk:
        </p>
        <ul className="text-start">
          <li>Szolgáltatásaink nyújtása és fejlesztése.</li>
          <li>Kapcsolattartás és ügyfélszolgálat biztosítása.</li>
          <li>Marketing és promóciós célok.</li>
        </ul>
        
        <h2 className="mt-4">4. Az adatok megosztása</h2>
        <p>
          Az Ön adatait harmadik féllel nem osztjuk meg, kivéve a jogszabályban előírt eseteket
          vagy ha az szükséges a szolgáltatás nyújtásához (pl. fizetési szolgáltatók).
        </p>
        
        <h2 className="mt-4">5. Az Ön jogai</h2>
        <p>
          Ön jogosult hozzáférni az adataihoz, kérheti azok törlését vagy módosítását,
          valamint tiltakozhat azok marketing célú felhasználása ellen.
        </p>
        
        <h2 className="mt-4">6. Kapcsolat</h2>
        <p>
          Ha bármilyen kérdése van adatvédelmi irányelveinkkel kapcsolatban, lépjen
          kapcsolatba velünk az alábbi e-mail címen: <strong>privacy@company.com</strong>
        </p>
        <p><strong>Utolsó frissítés:</strong> 2025. március 28.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
