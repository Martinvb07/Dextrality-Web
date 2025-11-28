import { Link } from 'react-router-dom'

export default function GuiaGeneral() {
    return (
        <main className="max-w-4xl mx-auto px-4 pt-28 pb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">🧭 Guía Básica — Cómo Unirse al Servidor (Java & Bedrock)</h1>

        <p className="mb-6">Bienvenido a <strong>Dextrality</strong>. Sigue estos pasos para entrar desde Java o Bedrock sin complicaciones.</p>

        <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">🔹 1. Requisitos Previos</h2>

            <div className="mb-4">
            <h3 className="font-semibold">✔️ Java Edition</h3>
            <ul className="list-disc ml-6 mt-2">
                <li>Tener Minecraft Java Edition <strong>1.20+</strong> instalado.</li>
                <li>Conexión a Internet estable.</li>
                <li>No usar mods que alteren la jugabilidad (solo <em>Optifine</em>, Shaders, minimapas legales).</li>
            </ul>
            </div>

            <div>
            <h3 className="font-semibold">✔️ Bedrock Edition</h3>
            <ul className="list-disc ml-6 mt-2">
                <li>Tener Minecraft Bedrock en: Windows 10/11, Android, iOS, Xbox, PlayStation o Nintendo Switch.</li>
                <li>Contar con <strong>Cross-Play</strong> activado para poder ver servidores Java/Bedrock en algunos clientes.</li>
            </ul>
            </div>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">🚀 2. Cómo Unirse desde Java Edition</h2>

            <p className="mb-2"><strong>🔗 Datos de Conexión</strong></p>
            <div className="bg-gray-100 p-3 rounded mb-3 overflow-auto break-words">
            <p className="font-medium">IP Java: <code className="break-words whitespace-normal">play.dextrality.net</code></p>
            <p className="mt-1">Versión: <strong>1.20 – 1.21+</strong></p>
            <p className="mt-1">Modo: Survival / Earth / Modalidades activas</p>
            </div>

            <p className="font-semibold mb-2">📝 Pasos</p>
            <ol className="list-decimal ml-6">
            <li>Abre Minecraft Java.</li>
            <li>Clic en <em>Multijugador</em>.</li>
            <li>Presiona <em>Agregar servidor</em>.</li>
            <li>Escribe:<br />
                Nombre: <strong>Dextrality Earth</strong><br />
                Dirección: <code>play.dextrality.net</code>
            </li>
            <li>Guardar → Entrar al servidor.</li>
            </ol>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">📱 3. Cómo Unirse desde Bedrock Edition</h2>

            <p className="mb-2"><strong>🔗 Datos de Conexión</strong></p>
            <div className="bg-gray-100 p-3 rounded mb-3 overflow-auto break-words">
            <p className="font-medium">IP Bedrock: <code className="break-words whitespace-normal">play.dextrality.net</code></p>
            <p className="mt-1">Puerto: <code className="break-words whitespace-normal">19132</code> (estándar Bedrock)</p>
            </div>

            <p className="font-semibold mb-2">📝 Pasos</p>
            <ol className="list-decimal ml-6">
            <li>Abre Minecraft Bedrock.</li>
            <li>Ve al menú <em>Jugar</em>.</li>
            <li>Entra en <em>Servidores</em>.</li>
            <li>Baja y toca <em>Agregar servidor</em>.</li>
            <li>Llena los campos:<br />
                Nombre: <strong>Dextrality Earth</strong><br />
                IP: <code>play.dextrality.net</code><br />
                Puerto: <code>19132</code>
            </li>
            <li>Guardar → Unirse.</li>
            </ol>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">🛡️ 4. Errores Comunes y Soluciones</h2>

            <div className="mb-3">
            <h3 className="font-semibold">❌ “No se puede conectar al servidor”</h3>
            <ul className="list-disc ml-6 mt-2">
                <li>Revisa que la IP esté bien escrita.</li>
                <li>Asegúrate de estar en la versión correcta.</li>
                <li>Verifica que tu Internet no esté bloqueando puertos o que tu firewall/antivirus no esté bloqueando Minecraft.</li>
            </ul>
            </div>

            <div className="mb-3">
            <h3 className="font-semibold">❌ “Incompatible Version”</h3>
            <p className="ml-6">Actualiza Minecraft a la versión mínima requerida (<strong>1.20</strong>) o usa una versión que sea compatible con el servidor.</p>
            </div>

            <div>
            <h3 className="font-semibold">❌ Bedrock no muestra el servidor</h3>
            <ul className="list-disc ml-6 mt-2">
                <li>Revisa que estés escribiendo el puerto <code>19132</code>.</li>
                <li>Si estás en consola, habilita <em>Juego multiplataforma</em> (Cross-Play).</li>
            </ul>
            </div>
        </section>

        <footer className="mt-8">
            <p className="text-sm text-gray-600">¿Necesitas ayuda adicional? Únete a nuestro Discord o contacta a los moderadores dentro del servidor.</p>
            <p className="mt-3"><Link to="/guias" className="text-indigo-600 hover:underline">← Volver a Guías</Link></p>
        </footer>
        </main>
    )
}