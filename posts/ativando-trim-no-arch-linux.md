---
title: "Como Ativar o TRIM no Arch Linux"
excerpt: "Aprenda a ativar o TRIM no Arch Linux para otimizar o desempenho e a durabilidade do seu SSD."
date: 2025-05-18
category: "Linux"
image: "https://images.unsplash.com/photo-1777896193454-8b4863264f0b"
---

## 💡 O que é TRIM e por que ativá-lo?

Se você usa um **SSD** no seu sistema, ativar o **TRIM** é fundamental. O TRIM permite que o sistema operacional informe ao SSD quais blocos de dados não são mais utilizados e podem ser apagados internamente. Isso:

- Mantém o desempenho do SSD ao longo do tempo
- Prolonga sua vida útil
- Reduz o desgaste das células de memória

> ⚠️ Por padrão, o Arch Linux **não ativa o TRIM automaticamente**, ao contrário de outras distribuições como Ubuntu. Portanto, é importante ativar esse recurso manualmente.

---

## 🔧 Passo 1: Ativando o TRIM automático com `fstrim.timer`

O `fstrim.timer` é uma tarefa agendada via systemd que executa o TRIM automaticamente **uma vez por semana**.

Execute o seguinte comando para ativá-lo imediatamente e garantir que ele persista após reinicializações:

```bash
sudo systemctl enable fstrim.timer --now
```

---

## 🔍 Passo 2: Verificando se o timer está ativo

Para garantir que tudo está funcionando corretamente, verifique o status do timer com:

```bash
systemctl status fstrim.timer
```

Você deverá ver algo como `Active: active (waiting)` e uma próxima execução agendada.

---

## ⚙️ Passo 3: Executando o TRIM manualmente (opcional)

Se quiser realizar o TRIM manualmente — por exemplo, antes de desfragmentar ou fazer backup — use:

```bash
sudo fstrim /
```

> 📁 Você pode substituir `/` por outras partições montadas, como `/home` ou `/var`.

---

## 📝 Passo 4 (Opcional): Garantindo o TRIM com um preset personalizado

Quer garantir que o `fstrim.timer` sempre seja habilitado automaticamente, mesmo em reinstalações ou reconstruções do sistema? Você pode criar um **preset personalizado**:

### 4.1 Criar o diretório (caso não exista):

```bash
sudo mkdir -p /etc/systemd/system-preset/
```

### 4.2 Criar ou editar o arquivo de preset:

```bash
sudo nano /etc/systemd/system-preset/90-custom.preset
```

### 4.3 Adicionar a linha abaixo:

```
enable fstrim.timer
```

### 4.4 Aplicar os presets:

```bash
sudo systemctl preset-all
```

---

## ✅ Verificação final

Para confirmar que o TRIM está funcionando corretamente:

```bash
systemctl status fstrim.timer
```

Ou veja os logs das últimas execuções com:

```bash
journalctl -u fstrim.timer
```

Você deve ver entradas indicando que o TRIM foi aplicado com sucesso.

---

## 📌 Conclusão

Ativar o TRIM no Arch Linux é um passo simples, mas extremamente importante para quem utiliza SSDs. Ao seguir esse guia:

- Você melhora a performance geral do sistema
- Garante maior longevidade ao seu hardware
- Evita degradação silenciosa no armazenamento

---

📚 **Referência**:
[Documentação oficial do systemd – fstrim.timer](https://github.com/joaomjbraga/AtivandoTRIM)

---

👍 Curtiu este post? Compartilhe com outros usuários do Arch e ajude a manter mais SSDs saudáveis por aí!
